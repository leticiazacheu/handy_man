3.times do
worker = Worker.create(
    first_name: Faker::Artist.name,
    last_name: Faker::Hacker.abbreviation,
    specialty: Faker::Hacker.noun,
  )

  5.times do
    ser = Service.create(
      title: Faker::Science.element,
      complete: Faker::Boolean.boolean,
      rating: Faker::Number.between(from: 1, to: 10),
      worker_id: worker.id,
    )
    2.times do
      Comment.create(
        author: Faker::FunnyName.name,
        subject: Faker::Educator.subject,
        body: Faker::Markdown.emphasis,
        service_id: ser.id
      )
    end
  end
end

puts "Data Seeded"