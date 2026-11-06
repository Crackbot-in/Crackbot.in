---
title: "Why we started Crackbot"
summary: "A few of us kept doing security research on our own and keeping the results in private notes. This is where that changes. Here's what we plan to publish, and the rules we hold ourselves to."
date: 2026-11-01
topic: notes
kind: Note
authors: ["Crackbot Research"]
findings:
  - "We publish write-ups on vulnerabilities, malware, threat activity and forensics, with the evidence attached."
  - "Every vulnerability goes to the vendor first, under a default 90-day disclosure window."
  - "Nothing is published until someone other than the author has checked it."
---

Most of us got into security the same way: something broke in an interesting way and we couldn't leave it alone. For a while that curiosity lived in private notes, half-finished lab VMs and group chats at 2 a.m. Crackbot is our attempt to give it a home, and to hold ourselves to a standard while we do it.

## What we'll publish

We are a small group and we'd rather be useful than loud. When something is ready, it goes here:

- **Vulnerability write-ups.** Root cause, impact, and how to detect exploitation, published after the affected vendor has shipped a fix or the disclosure window has closed.
- **Malware analysis.** What a sample does, how it got there, and the detection rules we wrote while taking it apart.
- **Threat activity.** Campaigns and infrastructure we've been following, with indicators you can load into your own tools.
- **Forensics notes.** Artefacts worth collecting, how to read them, and the small tools we build to make that faster.

Some weeks that will be a long report. Some weeks it will be nothing at all. We would rather leave a gap than fill it with something thin.

## The rules we hold ourselves to

We only test systems we're allowed to test: our own lab, published bug bounty scopes, or systems where we have written permission. If we find a problem in someone else's product, they hear about it before anyone else does. Our [disclosure policy](/disclosure/) explains how that works and what vendors can expect from us.

We try to show our work. A claim should come with something you can check: a hash, a log excerpt, a packet capture, reproduction steps. When we aren't sure about something, we'll say so plainly.

And before anything goes out, someone who didn't write it reads it and tries to poke holes in it.

## Getting in touch

If you're a defender and something here helped, or didn't, we want to hear about it. If you're a vendor and you've received a report from us, reply to that thread directly. For everything else, our [contact page](/contact/) lists the right address.

We're just getting started. Thanks for reading.
