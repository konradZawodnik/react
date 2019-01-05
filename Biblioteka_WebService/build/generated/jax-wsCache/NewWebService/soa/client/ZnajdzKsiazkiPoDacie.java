
package soa.client;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for znajdzKsiazkiPoDacie complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="znajdzKsiazkiPoDacie"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="rok_wydania" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "znajdzKsiazkiPoDacie", propOrder = {
    "rokWydania"
})
public class ZnajdzKsiazkiPoDacie {

    @XmlElement(name = "rok_wydania")
    protected int rokWydania;

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

}
