class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user


  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user ? @current_user : nil
  end

  def log_in(user)
    session[:session_token] = user.session_token
  end

  def log_out
    current_user.reset_session_token
    session[:session_token] = nil
  end


  def require_logged_in
    if !current_user
      render json: { base: ["You are not currently logged in"] }, status: 404
    end
  end
end
