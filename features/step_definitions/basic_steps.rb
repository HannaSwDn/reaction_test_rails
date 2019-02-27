Given("I click on {string}") do |string|
    click_on string
end

Given("I wait {float} seconds") do |float|
    sleep float
end

Given("I click on the red circle") do
    find('#circle').click
end

Given("I visit the home page") do
    visit root_path
end

Then("show me the page") do
    save_and_open_page
end

Given("the waiting time is {int} seconds") do |int|
    
end