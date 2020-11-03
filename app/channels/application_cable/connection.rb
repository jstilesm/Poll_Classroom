module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
    def find_verified_user
      # hack to get session to load
      request.session["load"] = true
      if verified_user = User.find_by(session_token: request.session[:session_token])
        verified_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
