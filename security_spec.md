# Security Specification: Rec Portfolio

## Data Invariants
- Only whitelisted admins can create, update, or delete projects and blog posts.
- Anyone can read projects and published blog posts.
- Anyone can submit a contact message (create), but only admins can read or delete them.
- Users cannot modify their own admin status.

## The Dirty Dozen Payloads
1. **Identity Spoof**: Anonymous user trying to create a project document.
2. **Resource Poisoning**: Submitting a 1MB string as a project title.
3. **Admin Escalation**: A user trying to create a document in `/admins/`.
4. **Invalid State**: Updating a project with an invalid slug format.
5. **PII Leak**: Non-admin user trying to list all messages in `/messages/`.
6. **Relational Sync**: Creating a blog post without a required author field.
7. **Type Mismatch**: Sending a number for a tags array.
8. **Shadow Field**: Adding `isPromoted: true` to a project update when it's not in the schema.
9. **Update Gap**: Changing the `createdAt` timestamp of a project.
10. **ID Poisoning**: Using a 2KB string as a `projectId`.
11. **Verification Bypass**: Authenticated user with unverified email trying to post a message (if restricted).
12. **Bulk Delete**: Non-admin attempting to delete all documents.

## Test Runner Logic
The following rules will use `isValidProject`, `isValidBlogPost`, and `isValidMessage` helpers to enforce these invariants.
Whitelisting will be done via `exists(/databases/$(database)/documents/admins/$(request.auth.uid))`.
