class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :notes,
    foreign_key: :author_id

  has_many :notebooks,
    foreign_key: :author_id

  has_many :tags,
    foreign_key: :author_id

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(128)
  end

  def self.reset_guest(key)
    guest = User.find_by_username('Guest')

    if guest && guest.password?(key)
      Rails.application.load_seed
      guest
    else
      nil
    end
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def first_set_up
    if username != 'Guest'
      notebook = Notebook.create(title: 'My first notebook',
                                 author: self)
      Note.create(title: 'My first note',
                  author: self,
                  notebook: notebook,
                  body: 'Your note goes here')
    end
  end
end
