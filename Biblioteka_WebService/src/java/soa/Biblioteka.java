/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soa;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/**
 *
 * @author PC
 */
public class Biblioteka {
    private List<Ksiazka> books;


  Biblioteka() {
    books = new ArrayList<>();
  }

  public void dodajPrzykladoweKsiazki() {

    books.add(new Ksiazka("Sienkiewicz",1897,"Potop","PWN",123546));
    books.add(new Ksiazka("Mickiewicz",1797,"Pan Tadeusz","WSiP",0000));
    books.add(new Ksiazka("J.K.Rowling",2001,"Harry Potter i Komanta Tajemnic","British books",9935));
    books.add(new Ksiazka("J.R.Tolkien",1967,"Władca Pierścieni","New Zeland Company",65654));
  }

  public List<Ksiazka> zwrocWszystkieKsiazki() {
    return books;
  }

  public List<Ksiazka> znajdzKsiazkiPoAutorze(String Autor) {

    List<Ksiazka> books1 = new ArrayList<>();
    for (Ksiazka ksiazka : books) {
    //  if (Ksiazka.getAutor().equalsIgnoreCase(Autor)) {
        books1.add(ksiazka);
   //   }
    }
    return books1;
  }
  
  public List<Ksiazka> znajdzKsiazkiPoTytule(String tytul) {

    List<Ksiazka> books1 = new ArrayList<>();
    for (Ksiazka ksiazka : books) {
    //  if (Ksiazka.getTytul().equalsIgnoreCase(Tytul)) {
        books1.add(ksiazka);
    //  }
    }
    return books1;
  }

  public List<Ksiazka> znajdzKsiazkiPoDacie(int data) {

    List<Ksiazka> books1 = new ArrayList<>();
    for (Ksiazka ksiazka : books) {
    //  if (Ksiazka.getRok_wydania().equalsIgnoreCase(data)) {
        books1.add(ksiazka);
    //  }
    }
    return books1;
  }

 
  public List<Ksiazka> znajdzKsiazkiPoWydawnictiwie(String wydawnictwo) {

    List<Ksiazka> books1 = new ArrayList<>();
    for (Ksiazka ksiazka : books) {
    //  if (Ksiazka.getWydawnictwo().contains(wydawnictwo)) {
        books1.add(ksiazka);
    //  }
    }
    return books1;
  }

public List<Ksiazka> znajdzKsiazkiPoId(int id) {

    List<Ksiazka> books1 = new ArrayList<>();
    for (Ksiazka ksiazka : books) {
   //   if (Ksiazka.getId().contains(id)) {
        books1.add(ksiazka);
  //    }
    }
    return books1;
  }


  public Ksiazka dodajKsiazke(Ksiazka ksiazka) {

    books.add(ksiazka);

    return ksiazka;
  }
}
