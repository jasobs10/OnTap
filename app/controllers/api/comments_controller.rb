class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: {base: ["Invalid comment"]}, status: 404
    end
  end

  def update

    @comment = Comment.find(params[:comment][:id])
    if current_user.id == @comment.user_id.to_i
      @comment.update(comment_params)
      if @comment.save
        render :show
      else
        render json: {base: ["You cannot edit this comment"]}, status: 404
      end
    else
      render json: {base: ["You cannot edit this comment"]}, status: 404
    end
  end

  def show

  end

  def destroy

    @comment = Comment.find(params[:id])
    if current_user.id == @comment.user_id.to_i
      @comment.destroy
      render :show
    else
      render json: {base: ["You cannot delete this comment"]}, status: 404
    end

  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :checkin_id, :comment)
  end

end
