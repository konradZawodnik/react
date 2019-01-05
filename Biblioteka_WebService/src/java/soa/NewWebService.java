/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soa;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
/**
 *
 * @author PC
 */
@WebService(serviceName = "NewWebService")
public class NewWebService {

    /**
     * This is a sample web service operation
     */
 
    Biblioteka biblioteka = new Biblioteka();


  @WebMethod
  @WebResult(name = "ksiazki")
  public List<Ksiazka> dodajPrzykladoweFilmyDoBazy() {

    biblioteka.dodajPrzykladoweKsiazki();

    return biblioteka.zwrocWszystkieKsiazki();

  }

  @WebMethod
  @WebResult(name = "ksiazka")
  public List<Ksiazka> dodajKsiazki(@WebParam(name = "autor") String autor, @WebParam(name = "rok_wydania") int rok_wydania, @WebParam(name = "tytul") String tytul, @WebParam(name = "wydawnictwo") String wydawnictwo, @WebParam(name = "id") int id)  {

    return Collections.singletonList(biblioteka.dodajKsiazke(new Ksiazka(autor, rok_wydania, tytul, wydawnictwo, id)));

  }

  @WebMethod
  @WebResult(name = "ksiazki")
  public List<Ksiazka> znajdzWszystkieKsiazki() {

    return biblioteka.zwrocWszystkieKsiazki();

  }

  @WebMethod
  @WebResult(name = "ksiazki")
  public List<Ksiazka> znajdzKsiazkiPoAutorze(@WebParam(name = "autor") String autor) {

    return biblioteka.znajdzKsiazkiPoAutorze(autor);

  }

  @WebMethod
  @WebResult(name = "ksiazki")
  public List<Ksiazka> znajdzKsiazkiPoDacie(@WebParam(name = "rok_wydania") int rok_wydania) {

    return biblioteka.znajdzKsiazkiPoDacie(rok_wydania);

  }

  @WebMethod
  @WebResult(name = "ksiazki")
  public List<Ksiazka> znajdzKsiazkiPoTytule(@WebParam(name = "tytul") String tytul) {

    return biblioteka.znajdzKsiazkiPoTytule(tytul);

  }


@WebMethod
  @WebResult(name = "ksiazki")
  public List<Ksiazka> znajdzKsiazkiPoWydawnictiwie(@WebParam(name = "wydawnictwo") String wydawnictwo) {

    return biblioteka.znajdzKsiazkiPoWydawnictiwie(wydawnictwo);

  }
  
  
  
  
 @WebMethod
  @WebResult(name = "ksiazki")
  public List<Ksiazka> znajdzKsiazkiPoId(@WebParam(name = "id") int id) {

    return biblioteka.znajdzKsiazkiPoId(id);

  } 
  
  
  
  
 
}