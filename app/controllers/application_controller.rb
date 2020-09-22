class ApplicationController < ActionController::Base

    protect_from_forgery with: :exception

    helper_method :current_user
    helper_method :logged_in?

    private

        def current_user
            # debugger
            # current_user ||= User.find_by(session_token: session[:session_token])
            return nil unless session[:session_token]
            @current_user ||= User.find_by(session_token: session[:session_token])
        end

        def logged_in?
            !current_user.nil?
        end

        def login(user)
            user.reset_session_token!
            session[:session_token] = user.session_token
            @current_user = user
        end

        def logout_user!
            current_user.reset_session_token!
            session[:session_token] = nil
        end

        def require_logged_in
            unless current_user
                render json: { base: ["Invalid login info"]}, status: 401
            end
        end


end
