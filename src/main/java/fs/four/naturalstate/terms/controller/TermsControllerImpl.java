package fs.four.naturalstate.terms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TermsControllerImpl {
    @GetMapping("/terms")
    public String terms() {
        return "forward:/index.html";
    }

    @GetMapping("/partnerterms")
    public String PartnerTerms () { return "forward:/index.html"; }

    @GetMapping("/webterms")
    public String WebTerms () { return "forward:/index.html"; }
}