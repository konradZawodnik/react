
package soa.client;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for znajdzKsiazkiPoWydawnictiwie complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="znajdzKsiazkiPoWydawnictiwie"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
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
@XmlType(name = "znajdzKsiazkiPoWydawnictiwie", propOrder = {
    "wydawnictwo"
})
public class ZnajdzKsiazkiPoWydawnictiwie {

    protected String wydawnictwo;

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
