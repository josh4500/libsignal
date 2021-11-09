//
// Copyright 2020-2021 Signal Messenger, LLC.
// SPDX-License-Identifier: AGPL-3.0-only
//

import ByteArray from '../internal/ByteArray';
import * as Native from '../../Native';
export default class AuthCredentialResponse extends ByteArray {
  constructor(contents: Buffer) {
    super(contents, Native.AuthCredentialResponse_CheckValidContents);
  }
}
