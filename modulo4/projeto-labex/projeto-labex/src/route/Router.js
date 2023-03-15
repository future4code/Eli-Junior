import React from 'react';
import { 
    AplicacaoForm, 
    AreaDeAdmin, 
    CriarViagem, 
    DetalhesDeViagens, 
    ListaDeViagens, 
    PaginaInicial, 
    PaginaLogin, 
     } from '../pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const Router = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path={"/"}><PaginaInicial /></Route>
            <Route exact path={"/trips/list"}><ListaDeViagens /></Route>
            <Route exact path={"/trips/application"}><AplicacaoForm /></Route>
            <Route exact path={"/login"}><PaginaLogin /></Route>
            <Route exact path={"/admin/trips/list"}><AreaDeAdmin /></Route>
            <Route exact path={"/admin/trips/create"}><CriarViagem /></Route>
            <Route exact path={"/admin/trips/:id"}><DetalhesDeViagens /></Route>
        </Switch>
      </BrowserRouter>
  );
};


