class Worker < ApplicationRecord

    has_many :services, dependent: :destroy
validates :first_name, :last_name, :specialty presence: true

end
