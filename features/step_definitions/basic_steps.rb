Given("I click on {string}") do |string|
    click_on string
end

Given("I wait {int} seconds") do |int|
    sleep int
end

Given("I click on the red screen") do
    find('#test').click
end

Given("I visit the home page") do
    visit root_path
end

Then("show me the page") do
    save_and_open_page
end
