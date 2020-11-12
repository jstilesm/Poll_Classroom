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
      # debugger
      session = request.session

      verified_user = nil
      if session[:session_token]
        verified_user = User.find_by(session_token: session[:session_token])
      else
        verified_user = Visitor.find_by(session_token: session[:visitor_session_token])
      end

      if verified_user 
        verified_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
