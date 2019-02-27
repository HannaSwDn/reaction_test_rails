Then("I should see {string}") do |string|
    expect(page).to have_content string
end

Then("I should not see {string}") do |string|
    expect(page).to have_no_content string
end