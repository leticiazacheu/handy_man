class Comment < ApplicationRecord
  belongs_to :service

  validates :author, :subject, :body, presence: true
end
