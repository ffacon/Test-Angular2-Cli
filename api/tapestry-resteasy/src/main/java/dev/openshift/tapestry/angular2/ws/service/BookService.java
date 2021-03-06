package dev.openshift.tapestry.angular2.ws.service;

import org.apache.tapestry5.ioc.annotations.Inject;

import dev.openshift.tapestry.angular2.data.bookcat.Book;
import dev.openshift.tapestry.angular2.data.user.RoleConsts;
import dev.openshift.tapestry.angular2.entity.Comment;
import dev.openshift.tapestry.angular2.services.BookCatalog;
import dev.openshift.tapestry.angular2.services.CommentDAO;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import java.util.List;

@Path("/app")
public class BookService {

    @Inject
    BookCatalog bookCatalog;

    @Inject
    CommentDAO comments;

    @POST
    @Path("/comments")
    @Consumes("application/json")
    @RolesAllowed(RoleConsts.USER_ROLE)
    public Response postComment(Comment comment) {

        comment.setLikes(0);
        comments.add(comment);
        return Response.status(201).entity(comment).build();

    }


    @GET
    @Path("/catalog")
    @Consumes("application/json")
    @PermitAll
    public List<Book> getCatalog() {

        List<Book> ret = bookCatalog.getBooks();
        return ret;

    }


    @GET
    @Path("/catalog/{id}")
    @Consumes("application/json")
    @PermitAll
    public Book getBook(@PathParam("id")String id) {

    	Book ret = bookCatalog.getBookDetails(id);
        return ret;

    }


    @DELETE
    @Path("/comments/{id}")
    @Consumes("application/json")
    @RolesAllowed(RoleConsts.ADMIN_ROLE)
    public Comment deleteComment(@PathParam("id")int id) {

        Comment ret = comments.delete(id);
        return ret;

    }

}