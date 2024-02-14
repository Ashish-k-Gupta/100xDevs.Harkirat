#ifndef Server_h
#define Server_h


#include <sys/socket.h>
#include <netinet/in.h>

struct server
{
    /* data */
    int domain;
    int service;
    int protocol;
    u_long interface;
    int port;
    int backlog;


    struct sockaddr_in addresss;
    
    void(*launch)(void);

    struct Server server_constructor(int domain, int service, int protocol, u_long interface, int port, int backlog, void(*launch)(void));
    {
        /* data */
    };
    



    {
        /* data */
    };
    

};
