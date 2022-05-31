class V1::ThingsController < ApplicationController
  def random
    greeting = Greeting.all.order('random()').first
    render json: greeting, only: [:text]
  end
end
