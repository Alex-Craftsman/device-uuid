# @crfmn/device-uuid

A TypeScript library for generating device IDs (UUIDs). This package provides a `DeviceUUID` class for creating unique identifiers based on device characteristics.

## Installation

To install the package, run:

```bash
npm install @crfmn/device-uuid
```

## Usage

### DeviceUUID Class

The `DeviceUUID` class provides methods to generate a unique device ID based on the user agent and various device characteristics.

#### Importing the Class

```tsx
import { DeviceUUID } from '@crfmn/device-uuid';
```

#### Creating an Instance

You can create an instance of the `DeviceUUID` class by passing the user agent string and optional configuration options.

```tsx
const deviceUUID = new DeviceUUID(navigator.userAgent, { isMobile: true });
```

#### Generating a UUID

To generate a UUID, call the `get` method on the instance.

```tsx
const uuid = deviceUUID.get();
console.log(uuid);
```

## Example

Here is a complete example of using the `DeviceUUID` class to generate a device UUID.

```tsx
import React, { useEffect } from 'react';
import { DeviceUUID } from '@crfmn/device-uuid';

const App = () => {
  useEffect(() => {
    const deviceUUID = new DeviceUUID(navigator.userAgent, { isMobile: true });
    const uuid = deviceUUID.get();
    console.log(uuid);
  }, []);

  return (
    <div>
      <h1>Check the console for the generated UUID</h1>
    </div>
  );
};

export default App;
```

## API

### DeviceUUID

`DeviceUUID` class provides methods for generating device UUIDs.

#### Constructor

The constructor takes the user agent string and an optional configuration object.

```tsx
new DeviceUUID(userAgent: string, options?: DeviceUUIDOptions)
```

#### Methods

- `parse(source: string): Agent`: Parses the user agent string and returns an `Agent` object.
- `get(customData?: string): string`: Generates and returns a UUID.

### Interfaces

#### Agent

The `Agent` interface defines the structure of the object returned by the `parse` method.

#### DeviceUUIDOptions

The `DeviceUUIDOptions` interface defines the optional configuration object for the `DeviceUUID` class.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

MIT License. See LICENSE for details.

## Author

Alex Craftsman
- Website: https://crf.mn/
- Email: alx@crf.mn
- GitHub: https://github.com/Alex-Craftsman
