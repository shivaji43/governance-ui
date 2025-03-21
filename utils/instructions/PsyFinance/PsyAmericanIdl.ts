export type PsyAmerican = {
  version: '0.2.6'
  name: 'psy_american'
  instructions: [
    {
      name: 'initializeMarket'
      accounts: [
        {
          name: 'authority'
          isMut: true
          isSigner: true
        },
        {
          name: 'underlyingAssetMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'quoteAssetMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'optionMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'writerTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'quoteAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'optionMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'feeOwner'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'underlyingAmountPerContract'
          type: 'u64'
        },
        {
          name: 'quoteAmountPerContract'
          type: 'u64'
        },
        {
          name: 'expirationUnixTimestamp'
          type: 'i64'
        },
        {
          name: 'bumpSeed'
          type: 'u8'
        },
      ]
    },
    {
      name: 'mintOption'
      accounts: [
        {
          name: 'userAuthority'
          isMut: true
          isSigner: true
        },
        {
          name: 'underlyingAssetMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'underlyingAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'optionMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'mintedOptionDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'writerTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'mintedWriterTokenDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'optionMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'feeOwner'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'size'
          type: 'u64'
        },
      ]
    },
    {
      name: 'mintOptionV2'
      accounts: [
        {
          name: 'userAuthority'
          isMut: false
          isSigner: true
        },
        {
          name: 'underlyingAssetMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'underlyingAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'optionMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'mintedOptionDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'writerTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'mintedWriterTokenDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'optionMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'size'
          type: 'u64'
        },
      ]
    },
    {
      name: 'exerciseOption'
      accounts: [
        {
          name: 'userAuthority'
          isMut: false
          isSigner: true
        },
        {
          name: 'optionAuthority'
          isMut: true
          isSigner: true
        },
        {
          name: 'optionMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'optionMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'exerciserOptionTokenSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'quoteAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'quoteAssetSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'feeOwner'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'size'
          type: 'u64'
        },
      ]
    },
    {
      name: 'exerciseOptionV2'
      accounts: [
        {
          name: 'userAuthority'
          isMut: false
          isSigner: true
        },
        {
          name: 'optionAuthority'
          isMut: false
          isSigner: true
        },
        {
          name: 'optionMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'optionMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'exerciserOptionTokenSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'quoteAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'quoteAssetSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'size'
          type: 'u64'
        },
      ]
    },
    {
      name: 'closePostExpiration'
      accounts: [
        {
          name: 'userAuthority'
          isMut: false
          isSigner: true
        },
        {
          name: 'optionMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'writerTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'writerTokenSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'clock'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'size'
          type: 'u64'
        },
      ]
    },
    {
      name: 'closeOptionPosition'
      accounts: [
        {
          name: 'userAuthority'
          isMut: false
          isSigner: true
        },
        {
          name: 'optionMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'writerTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'writerTokenSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'optionTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'optionTokenSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'underlyingAssetDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'size'
          type: 'u64'
        },
      ]
    },
    {
      name: 'burnWriterForQuote'
      accounts: [
        {
          name: 'userAuthority'
          isMut: false
          isSigner: true
        },
        {
          name: 'optionMarket'
          isMut: false
          isSigner: false
        },
        {
          name: 'writerTokenMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'writerTokenSrc'
          isMut: true
          isSigner: false
        },
        {
          name: 'quoteAssetPool'
          isMut: true
          isSigner: false
        },
        {
          name: 'writerQuoteDest'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'size'
          type: 'u64'
        },
      ]
    },
    {
      name: 'initSerumMarket'
      accounts: [
        {
          name: 'userAuthority'
          isMut: true
          isSigner: true
        },
        {
          name: 'optionMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'serumMarket'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'dexProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'pcMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'optionMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'requestQueue'
          isMut: true
          isSigner: false
        },
        {
          name: 'eventQueue'
          isMut: true
          isSigner: false
        },
        {
          name: 'bids'
          isMut: true
          isSigner: false
        },
        {
          name: 'asks'
          isMut: true
          isSigner: false
        },
        {
          name: 'coinVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'pcVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'vaultSigner'
          isMut: false
          isSigner: false
        },
        {
          name: 'marketAuthority'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'marketSpace'
          type: 'u64'
        },
        {
          name: 'vaultSignerNonce'
          type: 'u64'
        },
        {
          name: 'coinLotSize'
          type: 'u64'
        },
        {
          name: 'pcLotSize'
          type: 'u64'
        },
        {
          name: 'pcDustThreshold'
          type: 'u64'
        },
      ]
    },
  ]
  accounts: [
    {
      name: 'optionMarket'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'optionMint'
            type: 'publicKey'
          },
          {
            name: 'writerTokenMint'
            type: 'publicKey'
          },
          {
            name: 'underlyingAssetMint'
            type: 'publicKey'
          },
          {
            name: 'quoteAssetMint'
            type: 'publicKey'
          },
          {
            name: 'underlyingAmountPerContract'
            type: 'u64'
          },
          {
            name: 'quoteAmountPerContract'
            type: 'u64'
          },
          {
            name: 'expirationUnixTimestamp'
            type: 'i64'
          },
          {
            name: 'underlyingAssetPool'
            type: 'publicKey'
          },
          {
            name: 'quoteAssetPool'
            type: 'publicKey'
          },
          {
            name: 'mintFeeAccount'
            type: 'publicKey'
          },
          {
            name: 'exerciseFeeAccount'
            type: 'publicKey'
          },
          {
            name: 'expired'
            type: 'bool'
          },
          {
            name: 'bumpSeed'
            type: 'u8'
          },
        ]
      }
    },
  ]
  errors: [
    {
      code: 6000
      name: 'ExpirationIsInThePast'
      msg: 'Expiration must be in the future'
    },
    {
      code: 6001
      name: 'QuoteAndUnderlyingAssetMustDiffer'
      msg: 'Same quote and underlying asset, cannot create market'
    },
    {
      code: 6002
      name: 'QuoteOrUnderlyingAmountCannotBe0'
      msg: 'Quote amount and underlying amount per contract must be > 0'
    },
    {
      code: 6003
      name: 'OptionMarketMustBeMintAuthority'
      msg: 'OptionMarket must be the mint authority'
    },
    {
      code: 6004
      name: 'OptionMarketMustOwnUnderlyingAssetPool'
      msg: 'OptionMarket must own the underlying asset pool'
    },
    {
      code: 6005
      name: 'OptionMarketMustOwnQuoteAssetPool'
      msg: 'OptionMarket must own the quote asset pool'
    },
    {
      code: 6006
      name: 'ExpectedSPLTokenProgramId'
      msg: 'Stop trying to spoof the SPL Token program! Shame on you'
    },
    {
      code: 6007
      name: 'MintFeeMustBeOwnedByFeeOwner'
      msg: 'Mint fee account must be owned by the FEE_OWNER'
    },
    {
      code: 6008
      name: 'ExerciseFeeMustBeOwnedByFeeOwner'
      msg: 'Exercise fee account must be owned by the FEE_OWNER'
    },
    {
      code: 6009
      name: 'MintFeeTokenMustMatchUnderlyingAsset'
      msg: 'Mint fee token must be the same as the underlying asset'
    },
    {
      code: 6010
      name: 'ExerciseFeeTokenMustMatchQuoteAsset'
      msg: 'Exercise fee token must be the same as the quote asset'
    },
    {
      code: 6011
      name: 'OptionMarketExpiredCantMint'
      msg: "OptionMarket is expired, can't mint"
    },
    {
      code: 6012
      name: 'UnderlyingPoolAccountDoesNotMatchMarket'
      msg: 'Underlying pool account does not match the value on the OptionMarket'
    },
    {
      code: 6013
      name: 'OptionTokenMintDoesNotMatchMarket'
      msg: 'OptionToken mint does not match the value on the OptionMarket'
    },
    {
      code: 6014
      name: 'WriterTokenMintDoesNotMatchMarket'
      msg: 'WriterToken mint does not match the value on the OptionMarket'
    },
    {
      code: 6015
      name: 'MintFeeKeyDoesNotMatchOptionMarket'
      msg: 'MintFee key does not match the value on the OptionMarket'
    },
    {
      code: 6016
      name: 'SizeCantBeLessThanEqZero'
      msg: 'The size argument must be > 0'
    },
    {
      code: 6017
      name: 'ExerciseFeeKeyDoesNotMatchOptionMarket'
      msg: 'exerciseFee key does not match the value on the OptionMarket'
    },
    {
      code: 6018
      name: 'QuotePoolAccountDoesNotMatchMarket'
      msg: 'Quote pool account does not match the value on the OptionMarket'
    },
    {
      code: 6019
      name: 'UnderlyingDestMintDoesNotMatchUnderlyingAsset'
      msg: 'Underlying destination mint must match underlying asset mint address'
    },
    {
      code: 6020
      name: 'FeeOwnerDoesNotMatchProgram'
      msg: "Fee owner does not match the program's fee owner"
    },
    {
      code: 6021
      name: 'OptionMarketExpiredCantExercise'
      msg: "OptionMarket is expired, can't exercise"
    },
    {
      code: 6022
      name: 'OptionMarketNotExpiredCantClose'
      msg: "OptionMarket has not expired, can't close"
    },
    {
      code: 6023
      name: 'NotEnoughQuoteAssetsInPool'
      msg: 'Not enough assets in the quote asset pool'
    },
    {
      code: 6024
      name: 'InvalidAuth'
      msg: 'Invalid auth token provided'
    },
    {
      code: 6025
      name: 'CoinMintIsNotOptionMint'
      msg: 'Coin mint must match option mint'
    },
    {
      code: 6026
      name: 'CannotPruneActiveMarket'
      msg: "Cannot prune the market while it's still active"
    },
    {
      code: 6027
      name: 'NumberOverflow'
      msg: 'Numberical overflow'
    },
  ]
}

export const PsyAmericanIdl: PsyAmerican = {
  version: '0.2.6',
  name: 'psy_american',
  instructions: [
    {
      name: 'initializeMarket',
      accounts: [
        {
          name: 'authority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'underlyingAssetMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quoteAssetMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'optionMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'writerTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quoteAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'underlyingAmountPerContract',
          type: 'u64',
        },
        {
          name: 'quoteAmountPerContract',
          type: 'u64',
        },
        {
          name: 'expirationUnixTimestamp',
          type: 'i64',
        },
        {
          name: 'bumpSeed',
          type: 'u8',
        },
      ],
    },
    {
      name: 'mintOption',
      accounts: [
        {
          name: 'userAuthority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'underlyingAssetMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'underlyingAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintedOptionDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'writerTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintedWriterTokenDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'feeOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'size',
          type: 'u64',
        },
      ],
    },
    {
      name: 'mintOptionV2',
      accounts: [
        {
          name: 'userAuthority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'underlyingAssetMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'underlyingAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintedOptionDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'writerTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintedWriterTokenDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'size',
          type: 'u64',
        },
      ],
    },
    {
      name: 'exerciseOption',
      accounts: [
        {
          name: 'userAuthority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'optionAuthority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'optionMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'optionMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'exerciserOptionTokenSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quoteAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quoteAssetSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeOwner',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'size',
          type: 'u64',
        },
      ],
    },
    {
      name: 'exerciseOptionV2',
      accounts: [
        {
          name: 'userAuthority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'optionAuthority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'optionMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'optionMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'exerciserOptionTokenSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quoteAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quoteAssetSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'size',
          type: 'u64',
        },
      ],
    },
    {
      name: 'closePostExpiration',
      accounts: [
        {
          name: 'userAuthority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'optionMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'writerTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'writerTokenSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'clock',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'size',
          type: 'u64',
        },
      ],
    },
    {
      name: 'closeOptionPosition',
      accounts: [
        {
          name: 'userAuthority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'optionMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'writerTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'writerTokenSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'optionTokenSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'underlyingAssetDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'size',
          type: 'u64',
        },
      ],
    },
    {
      name: 'burnWriterForQuote',
      accounts: [
        {
          name: 'userAuthority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'optionMarket',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'writerTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'writerTokenSrc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quoteAssetPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'writerQuoteDest',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'size',
          type: 'u64',
        },
      ],
    },
    {
      name: 'initSerumMarket',
      accounts: [
        {
          name: 'userAuthority',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'optionMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'serumMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'dexProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'optionMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'requestQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'eventQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bids',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'asks',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'coinVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'pcVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'marketAuthority',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'marketSpace',
          type: 'u64',
        },
        {
          name: 'vaultSignerNonce',
          type: 'u64',
        },
        {
          name: 'coinLotSize',
          type: 'u64',
        },
        {
          name: 'pcLotSize',
          type: 'u64',
        },
        {
          name: 'pcDustThreshold',
          type: 'u64',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'optionMarket',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'optionMint',
            type: 'publicKey',
          },
          {
            name: 'writerTokenMint',
            type: 'publicKey',
          },
          {
            name: 'underlyingAssetMint',
            type: 'publicKey',
          },
          {
            name: 'quoteAssetMint',
            type: 'publicKey',
          },
          {
            name: 'underlyingAmountPerContract',
            type: 'u64',
          },
          {
            name: 'quoteAmountPerContract',
            type: 'u64',
          },
          {
            name: 'expirationUnixTimestamp',
            type: 'i64',
          },
          {
            name: 'underlyingAssetPool',
            type: 'publicKey',
          },
          {
            name: 'quoteAssetPool',
            type: 'publicKey',
          },
          {
            name: 'mintFeeAccount',
            type: 'publicKey',
          },
          {
            name: 'exerciseFeeAccount',
            type: 'publicKey',
          },
          {
            name: 'expired',
            type: 'bool',
          },
          {
            name: 'bumpSeed',
            type: 'u8',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'ExpirationIsInThePast',
      msg: 'Expiration must be in the future',
    },
    {
      code: 6001,
      name: 'QuoteAndUnderlyingAssetMustDiffer',
      msg: 'Same quote and underlying asset, cannot create market',
    },
    {
      code: 6002,
      name: 'QuoteOrUnderlyingAmountCannotBe0',
      msg: 'Quote amount and underlying amount per contract must be > 0',
    },
    {
      code: 6003,
      name: 'OptionMarketMustBeMintAuthority',
      msg: 'OptionMarket must be the mint authority',
    },
    {
      code: 6004,
      name: 'OptionMarketMustOwnUnderlyingAssetPool',
      msg: 'OptionMarket must own the underlying asset pool',
    },
    {
      code: 6005,
      name: 'OptionMarketMustOwnQuoteAssetPool',
      msg: 'OptionMarket must own the quote asset pool',
    },
    {
      code: 6006,
      name: 'ExpectedSPLTokenProgramId',
      msg: 'Stop trying to spoof the SPL Token program! Shame on you',
    },
    {
      code: 6007,
      name: 'MintFeeMustBeOwnedByFeeOwner',
      msg: 'Mint fee account must be owned by the FEE_OWNER',
    },
    {
      code: 6008,
      name: 'ExerciseFeeMustBeOwnedByFeeOwner',
      msg: 'Exercise fee account must be owned by the FEE_OWNER',
    },
    {
      code: 6009,
      name: 'MintFeeTokenMustMatchUnderlyingAsset',
      msg: 'Mint fee token must be the same as the underlying asset',
    },
    {
      code: 6010,
      name: 'ExerciseFeeTokenMustMatchQuoteAsset',
      msg: 'Exercise fee token must be the same as the quote asset',
    },
    {
      code: 6011,
      name: 'OptionMarketExpiredCantMint',
      msg: "OptionMarket is expired, can't mint",
    },
    {
      code: 6012,
      name: 'UnderlyingPoolAccountDoesNotMatchMarket',
      msg: 'Underlying pool account does not match the value on the OptionMarket',
    },
    {
      code: 6013,
      name: 'OptionTokenMintDoesNotMatchMarket',
      msg: 'OptionToken mint does not match the value on the OptionMarket',
    },
    {
      code: 6014,
      name: 'WriterTokenMintDoesNotMatchMarket',
      msg: 'WriterToken mint does not match the value on the OptionMarket',
    },
    {
      code: 6015,
      name: 'MintFeeKeyDoesNotMatchOptionMarket',
      msg: 'MintFee key does not match the value on the OptionMarket',
    },
    {
      code: 6016,
      name: 'SizeCantBeLessThanEqZero',
      msg: 'The size argument must be > 0',
    },
    {
      code: 6017,
      name: 'ExerciseFeeKeyDoesNotMatchOptionMarket',
      msg: 'exerciseFee key does not match the value on the OptionMarket',
    },
    {
      code: 6018,
      name: 'QuotePoolAccountDoesNotMatchMarket',
      msg: 'Quote pool account does not match the value on the OptionMarket',
    },
    {
      code: 6019,
      name: 'UnderlyingDestMintDoesNotMatchUnderlyingAsset',
      msg: 'Underlying destination mint must match underlying asset mint address',
    },
    {
      code: 6020,
      name: 'FeeOwnerDoesNotMatchProgram',
      msg: "Fee owner does not match the program's fee owner",
    },
    {
      code: 6021,
      name: 'OptionMarketExpiredCantExercise',
      msg: "OptionMarket is expired, can't exercise",
    },
    {
      code: 6022,
      name: 'OptionMarketNotExpiredCantClose',
      msg: "OptionMarket has not expired, can't close",
    },
    {
      code: 6023,
      name: 'NotEnoughQuoteAssetsInPool',
      msg: 'Not enough assets in the quote asset pool',
    },
    {
      code: 6024,
      name: 'InvalidAuth',
      msg: 'Invalid auth token provided',
    },
    {
      code: 6025,
      name: 'CoinMintIsNotOptionMint',
      msg: 'Coin mint must match option mint',
    },
    {
      code: 6026,
      name: 'CannotPruneActiveMarket',
      msg: "Cannot prune the market while it's still active",
    },
    {
      code: 6027,
      name: 'NumberOverflow',
      msg: 'Numberical overflow',
    },
  ],
}
