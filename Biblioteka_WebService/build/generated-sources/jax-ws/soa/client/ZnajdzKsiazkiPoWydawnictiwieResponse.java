
package soa.client;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for znajdzKsiazkiPoWydawnictiwieResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="znajdzKsiazkiPoWydawnictiwieResponse"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="ksiazki" type="{http://soa/}ksiazka" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "znajdzKsiazkiPoWydawnictiwieResponse", propOrder = {
    "ksiazki"
})
public class ZnajdzKsiazkiPoWydawnictiwieResponse {

    protected List<Ksiazka> ksiazki;

    /**
     * Gets the value of the ksiazki property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the ksiazki property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getKsiazki().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Ksiazka }
     * 
     * 
     */
    public List<Ksiazka> getKsiazki() {
        if (ksiazki == null) {
            ksiazki = new ArrayList<Ksiazka>();
        }
        return this.ksiazki;
    }

}
