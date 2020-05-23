---
date: 2020-05-24T19:19:29.503Z
title: "Keep your SSH sessions alive until you don't want to"
description: ""
---

I do almost all of my work remotely on a server. I as well as my colleagues have a ton of SSH sessions open at all times. And I have seen them getting frustrated when they take a break and come back to see the tab not responding.

This is very easy to fix though. We just have to tell the SSH daemon at the server or the client in our system to send packets at a specific interval to avoid that.

## Configuration on the server

In the config of OpenSSH server in `/etc/ssh/sshd_config`, add the following:

```
ClientAliveInterval 300
ClientAliveCountMax 3
```

It will make sure that the OpenSSH server keeps the all the connections alive with no effort on the part of the clients.

## Configuration on the client

Add the following lines to any of the SSH configs in your system:

```
Host *
    ServerAliveInterval 300
    ServerAliveCountMax 3
```

You should add this to `/etc/ssh/ssh_config` for system-wide change or `~/.ssh/config` to apply just for the current user.

### Per-Host Configuration

You can replace `*` in `Host *` with a hostname to only apply the configuration for connections to that specific server. e.g.

```
Host *abhnv.dev
    ServerAliveInterval 300
    ServerAliveCountMax 3
```

## Explanation for the settings

`ServerAliveInterval 300` or `ClientAliveInterval 300` means that the server or the client will send a null packet to the other end every 300 seconds.

`ServerAliveCountMax 3` or `ClientAliveCountMax 3` means that the server or the client will try 3 times before giving up.
