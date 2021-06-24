class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependent: :destroy

  validates :type, :complete, :rating, presence: true
end
