/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soa;
import java.util.List;

/**
 *
 * @author PC
 */
public class Ksiazka {
   
  private int rok_wydania;
  private String autor;
  private String tytul;
  private String wydawnictwo;
  private int id;

  public Ksiazka(String autor, int rok_wydania,String tytul, String wydawnictwo,int id) {
     this.autor = autor;
      this.rok_wydania = rok_wydania;   
    this.tytul = tytul;
    this.wydawnictwo = wydawnictwo;
       this.id= id;
  }

  public String getTytul() {
    return tytul;
  }

  public void setTytul(String tytul) {
    this.tytul = tytul;
  }

  public int getRok_wydania() {
    return rok_wydania;
  }

  public void setRok_wydania(int rok_wydania) {
    this.rok_wydania = rok_wydania;
  }

  public String getAutor() {
    return autor;
  }

  public void setAutor(String rezyser) {
    this.autor = autor;
  }

  public String getWydawnictwo() {
    return wydawnictwo;
  }

  public void setWydawnictwo(String wydawnictwo) {
    this.wydawnictwo = wydawnictwo;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  } 
}
