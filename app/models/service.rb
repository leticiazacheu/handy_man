class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependent: :destroy

  validates :title, :complete, :rating, presence: true
end
