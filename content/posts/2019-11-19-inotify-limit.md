---
date: 2019-11-18T20:12:51.638Z
title: "inotify() limit"
description: "Bump up the number of files your system can monitor for changes"
---
Have you ever been working on a project and realized that project is not being hot-reloaded or re-compiled when you save or have auto-save enabled.

I almost always run into this issue after I have set up a new development environment. It seems like the system just stops monitoring for files. I have only encountered this issue on Linux systems though. Never on Windows or macOS.

After a bit of googling, I found out that the default limit of file watchers count, that Linux systems allow to monitor for filesystem changes is very low. 8192 to be exact. I know that it is very reasonable for a normal user. But not for a development use case. Our workspace's file count is usually upwards of 8192. JavaScript projects? Even more so.

The most common way, applications like VSCode or IntelliJ IDEs monitor filesystem changes on Linux, is `inotify`. We can query the current limit by running
```bash
$ cat /proc/sys/fs/inotify/max_user_watches
```
If you see a value in thousands, this is your problem. Fortunately, it's very trivial to fix. No kernel compilation needed. 😋

This limit configuration can be set by changing the value of `fs.inotify.max_user_watches` in `/etc/sysctl.conf`. You can put it to any number you want but I think ~65000 is a good enough limit. I set it to 65536 because Base 2!

You can do this using:
```bash
$ echo fs.inotify.max_user_watches=65536 | sudo tee -a /etc/sysctl.conf
# Then reload the new configuration values
$ sudo sysctl -p
```
And that's it.

If you just want to set it temporarily, just run
```bash
$ sudo sysctl fs.inotify.max_user_watches=65536
$ sudo sysctl -p
```
You can also put it in your `/etc/profile` so it will run on every restart. But I feel `/etc/sysctl.conf` is the better way.
