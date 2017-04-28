class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    # debugger
    if @comment.save
      render :show
    else
      render json: {base: ["Invalid comment"]}, status: 404
    end
  end

  def update
    @comment = Comment.find(params[:comment][:id])
    # debugger
    @comment.update(comment_params)
    if @comment.save
      render :show
    else
      render json: {base: ["You cannot edit this comment"]}, status: 404
    end
  end

  def show

  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show

  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :checkin_id, :comment)
  end

end
