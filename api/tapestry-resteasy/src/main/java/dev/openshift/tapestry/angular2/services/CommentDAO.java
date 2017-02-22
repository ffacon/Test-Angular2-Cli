package dev.openshift.tapestry.angular2.services;

import org.apache.tapestry5.hibernate.annotations.CommitAfter;

import dev.openshift.tapestry.angular2.entity.Comment;

import java.util.List;

public interface CommentDAO
{
    List<Comment> getCommentsByPhoneId(String phoneId);

    @CommitAfter
    void add(Comment comment);

    @CommitAfter
    Comment incLike(int commentId);

    @CommitAfter
    Comment delete(int commentId);

}
