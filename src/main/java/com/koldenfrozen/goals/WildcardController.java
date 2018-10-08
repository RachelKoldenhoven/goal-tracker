package com.koldenfrozen.goals;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Paths;

@Controller
public class WildcardController {
    private static Logger log = LoggerFactory.getLogger(WildcardController.class);
    private static ClassLoader loader = WildcardController.class.getClassLoader();

    // https://stackoverflow.com/questions/5673260/downloading-a-file-from-spring-controllers
    @RequestMapping(value = "**", method = RequestMethod.GET)
    public void getFile(HttpServletRequest request, HttpServletResponse response) {
        String path = Paths.get("static", request.getServletPath()).normalize().toString();
        try (InputStream is = loader.getResourceAsStream(path)) {
            OutputStream os = response.getOutputStream();
            if (is == null || "static".equals(path)) {
                try (InputStream is2 = loader.getResourceAsStream("static/index.html")) {
                    IOUtils.copy(is2, os); // default
                }
            } else {
                IOUtils.copy(is, os);
            }
            response.flushBuffer();
        } catch (IOException ex) {
            log.error("Error writing file to output stream. Filename was '{}'", path, ex);
            throw new RuntimeException("IOError writing file to output stream");
        }
    }
}
