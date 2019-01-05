
package soa.client;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ksiazka complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ksiazka"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="autor" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="rok_wydania" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="tytul" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="wydawnictwo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ksiazka", propOrder = {
    "autor",
    "id",
    "rokWydania",
    "tytul",
    "wydawnictwo"
})
public class Ksiazka {

    protected String autor;
    protected int id;
    @XmlElement(name = "rok_wydania")
    protected int rokWydania;
    protected String tytul;
    protected String wydawnictwo;

    /**
     * Gets the value of the autor property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAutor() {
        return autor;
    }

    /**
     * Sets the value of the autor property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAutor(String value) {
        this.autor = value;
    }

    /**
     * Gets the value of the id property.
     * 
     */
    public int getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     */
    public void setId(int value) {
        this.id = value;
    }

    /**
     * Gets the value of the rokWydania property.
     * 
     */
    public int getRokWydania() {
        return rokWydania;
    }

    /**
     * Sets the value of the rokWydania property.
     * 
     */
    public void setRokWydania(int value) {
        this.rokWydania = value;
    }

    /**
     * Gets the value of the tytul property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTytul() {
        return tytul;
    }

    /**
     * Sets the value of the tytul property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTytul(String value) {
        this.tytul = value;
    }

    /**
     * Gets the value of the wydawnictwo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getWydawnictwo() {
        return wydawnictwo;
    }

    /**
     * Sets the value of the wydawnictwo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setWydawnictwo(String value) {
        this.wydawnictwo = value;
    }

}
