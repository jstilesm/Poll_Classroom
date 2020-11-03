import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupContainer from "./session_form/signup_form_container";
import LoginContainer from "./session_form/login_form_container";
import SplashContainer from "./splash/splash_container";
import NavContainer from "./nav_bar/nav_bar_container";
import ConnectorContainer from "./connector/connector_container";
import PollContainer from "./poll/poll_container";
// import GroupsContainer from './groups/group_container';
import { Protected, AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";

//questions containers
import QuestionIndexContainer from "./questions/question_index_container";
import CreateQuestionFormContainer from "./questions/create_question_form_container";
import EditQuestionFormContainer from "./questions/edit_question_form_container";
import QuestionShowContainer from "./questions/question_show_container";

import AnswerContainer from "./answers/answers_container";

const App = () => (
  <>
    <NavContainer />
    {/* <h1 className="main-header">Class Everywhere</h1> */}

    <Modal />
    <Switch>
      <AuthRoute exact path="/questions" component={QuestionIndexContainer} />
      <AuthRoute
        exact
        path="/questions/new"
        component={CreateQuestionFormContainer}
      />
      <AuthRoute
        path="/questions/:questionId/edit"
        component={EditQuestionFormContainer}
      />
      <AuthRoute
        path="/questions/:questionId"
        component={QuestionShowContainer}
      />

      <Route exact path="/signup-alt" component={ConnectorContainer} />
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route exact path="/poll" component={PollContainer} />
      <Route exact path="/username" component={AnswerContainer} />
      {/* <Protected path='/activities' component={GroupsContainer}/> */}
    </Switch>
  </>
);

export default App;
