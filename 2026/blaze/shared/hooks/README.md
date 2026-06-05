# Authentication Hook Usage

## useAuth Hook

The `useAuth` hook provides authentication functionality throughout your app.

### Available Properties & Methods:

```typescript
const { isLoggedIn, user, login, logout } = useAuth();
```

- **`isLoggedIn`**: boolean - Whether user is currently logged in
- **`user`**: User object or null - Contains email and hashedEmail
- **`login(email: string)`**: Function to log in a user
- **`logout()`**: Function to log out current user

### Example Usage:

```tsx
import { useAuth } from '../hooks/useAuth';

const MyComponent = () => {
  const { isLoggedIn, user, logout } = useAuth();

  if (!isLoggedIn) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <p>Welcome, {user?.email}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
```

### Login Process:

1. User fills in email/password on login form
2. Form calls `login(email)` function  
3. Hook sets cookies and updates global state
4. All components using `useAuth` automatically re-render with new state

### Security Note:

This is a POC implementation. For production:
- Use proper JWT tokens
- Validate against real backend
- Use secure cookie settings
- Implement proper password hashing