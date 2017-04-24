# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  f_name          :string           not null
#  l_name          :string           not null
#  about           :text
#  city            :string
#  state           :string
#  country         :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :f_name, :l_name,  presence: true
  validates :password, length: {minimum: 4, allow_nil: true}
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :checkins, dependent: :destroy
  has_many :wishlists
  has_many :wishlist_beers, through: :wishlists, source: :beer
  has_many :brewery_likes
  has_many :liked_breweries,
    through: :brewery_likes,
    source: :brewery




  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


end
