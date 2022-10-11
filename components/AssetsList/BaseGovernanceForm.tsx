import Input from '@components/inputs/Input'
import Select from '@components/inputs/Select'
import AmountSlider from '@components/Slider'
import Switch from '@components/Switch'
import useRealm from '@hooks/useRealm'
import { GovernanceConfig, VoteTipping } from '@solana/spl-governance'
import { DISABLED_VOTER_WEIGHT } from '@tools/constants'
import {
  fmtPercentage,
  getMintMinAmountAsDecimal,
  getMintNaturalAmountFromDecimal,
  getMintSupplyFractionAsDecimalPercentage,
  getMintSupplyPercentageAsDecimal,
  parseMintNaturalAmountFromDecimal,
} from '@tools/sdk/units'
import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import { BaseGovernanceFormV3 } from './BaseGovernanceFormV3'

export interface BaseGovernanceFormFieldsV2 {
  _programVersion: 2
  minCommunityTokensToCreateProposal: number | string
  minInstructionHoldUpTime: number
  maxVotingTime: number
  voteThreshold: number
  voteTipping: VoteTipping
}

// @asktree: If GovernanceConfig updates in the future in an unversioned way, I suggest using Omit to exclude non-V3 fields
// I chose to make the data stored in the exact same data model we use for the sdk to reduce data model bloat.
// There are reasons not to do this, but I think it works for this usecase. If I didnt do this, I would make a recursive type
// where all leaf nodes are strings. I would not invent a new type that is similar but lacks any direct mapping to GovernanceConfig.
export type BaseGovernanceFormFieldsV3 = Omit<GovernanceConfig, 'reserved'> & {
  _programVersion: 3
}

const BaseGovernanceFormV2 = ({
  formErrors,
  form,
  setForm,
  setFormErrors,
}: {
  formErrors: any
  setForm: any
  setFormErrors: any
  form: BaseGovernanceFormFieldsV2
}) => {
  const { realmInfo, mint: realmMint } = useRealm()
  const [minTokensPercentage, setMinTokensPercentage] = useState<
    number | undefined
  >()
  const isMaxMinCommunityNumber =
    form.minCommunityTokensToCreateProposal === DISABLED_VOTER_WEIGHT.toString()
  const [showMinCommunity, setMinCommunity] = useState(!isMaxMinCommunityNumber)

  const handleSetForm = ({ propertyName, value }) => {
    setFormErrors({})
    setForm({ ...form, [propertyName]: value })
  }
  const validateMinMax = (e) => {
    const fieldName = e.target.name
    const min = e.target.min || 0
    const max = e.target.max || Number.MAX_SAFE_INTEGER
    const value = form[fieldName]
    const currentPrecision = new BigNumber(min).decimalPlaces()

    handleSetForm({
      value:
        e.target.value === DISABLED_VOTER_WEIGHT.toString()
          ? DISABLED_VOTER_WEIGHT.toString()
          : parseFloat(
              Math.max(
                Number(min),
                Math.min(Number(max), Number(value))
              ).toFixed(currentPrecision)
            ),
      propertyName: fieldName,
    })
  }
  function parseMinTokensToCreateProposal(
    value: string | number,
    mintDecimals: number
  ) {
    return typeof value === 'string'
      ? parseMintNaturalAmountFromDecimal(value, mintDecimals)
      : getMintNaturalAmountFromDecimal(value, mintDecimals)
  }
  const onMinTokensChange = (minTokensToCreateProposal: number | string) => {
    const minTokens = realmMint
      ? parseMinTokensToCreateProposal(
          minTokensToCreateProposal,
          realmMint.decimals
        )
      : 0
    setMinTokensPercentage(getMinTokensPercentage(minTokens))
  }
  const getMinTokensPercentage = (amount: number) =>
    realmMint ? getMintSupplyFractionAsDecimalPercentage(realmMint, amount) : 0

  // Use 1% of mint supply as the default value for minTokensToCreateProposal and the default increment step in the input editor
  const mintSupply1Percent = realmMint
    ? getMintSupplyPercentageAsDecimal(realmMint, 1)
    : 100
  const minTokenAmount = realmMint
    ? getMintMinAmountAsDecimal(realmMint)
    : 0.0001
  // If the supply is small and 1% is below the minimum mint amount then coerce to the minimum value
  const minTokenStep = Math.max(mintSupply1Percent, minTokenAmount)

  const getSupplyPercent = () => {
    const hasMinTokensPercentage =
      !!minTokensPercentage && !isNaN(minTokensPercentage)
    const percent =
      hasMinTokensPercentage && minTokensPercentage
        ? fmtPercentage(minTokensPercentage)
        : ''
    return hasMinTokensPercentage && <div>{`${percent} of token supply`}</div>
  }

  useEffect(() => {
    onMinTokensChange(form.minCommunityTokensToCreateProposal)
  }, [form.minCommunityTokensToCreateProposal, realmInfo?.symbol])

  return (
    <>
      <div className="text-sm mb-3">
        <div className="mb-2">Min community tokens to create proposal</div>
        <div className="flex flex-row text-xs items-center">
          <Switch
            checked={showMinCommunity}
            onChange={() => {
              setMinCommunity(!showMinCommunity)
              if (!showMinCommunity === true) {
                handleSetForm({
                  value: 1,
                  propertyName: 'minCommunityTokensToCreateProposal',
                })
              } else {
                handleSetForm({
                  value: DISABLED_VOTER_WEIGHT.toString(),
                  propertyName: 'minCommunityTokensToCreateProposal',
                })
              }
            }}
          />{' '}
          <div className="ml-3">
            {showMinCommunity ? 'Enabled' : 'Disabled'}
          </div>
        </div>
      </div>

      {showMinCommunity && (
        <Input
          value={form.minCommunityTokensToCreateProposal}
          type="number"
          name="minCommunityTokensToCreateProposal"
          min={minTokenAmount}
          step={minTokenStep}
          onBlur={validateMinMax}
          onChange={(evt) =>
            handleSetForm({
              value: evt.target.value,
              propertyName: 'minCommunityTokensToCreateProposal',
            })
          }
          error={formErrors['minCommunityTokensToCreateProposal']}
        />
      )}
      {showMinCommunity && getSupplyPercent()}
      <Input
        label="min instruction hold up time (days)"
        value={form.minInstructionHoldUpTime}
        type="number"
        min={0}
        name="minInstructionHoldUpTime"
        onBlur={validateMinMax}
        onChange={(evt) =>
          handleSetForm({
            value: evt.target.value,
            propertyName: 'minInstructionHoldUpTime',
          })
        }
        error={formErrors['minInstructionHoldUpTime']}
      />
      <Input
        label="Max voting time (days)"
        value={form.maxVotingTime}
        name="maxVotingTime"
        type="number"
        min={0.01}
        onBlur={validateMinMax}
        onChange={(evt) =>
          handleSetForm({
            value: evt.target.value,
            propertyName: 'maxVotingTime',
          })
        }
        error={formErrors['maxVotingTime']}
      />
      <Input
        label="Yes vote threshold (%)"
        value={form.voteThreshold}
        max={100}
        min={1}
        name="voteThreshold"
        type="number"
        onBlur={validateMinMax}
        onChange={(evt) =>
          handleSetForm({
            value: evt.target.value,
            propertyName: 'voteThreshold',
          })
        }
        error={formErrors['voteThreshold']}
      />
      <div className="max-w-lg pb-5">
        <AmountSlider
          step={1}
          value={form.voteThreshold}
          disabled={false}
          onChange={($e) => {
            handleSetForm({
              value: $e,
              propertyName: 'voteThreshold',
            })
          }}
        />
      </div>
      <Select
        label="Vote tipping"
        value={VoteTipping[form.voteTipping as any]}
        onChange={(selected) =>
          handleSetForm({
            value: selected,
            propertyName: 'voteTipping',
          })
        }
      >
        {Object.keys(VoteTipping)
          .filter((vt) => typeof VoteTipping[vt as any] === 'string')
          .map((vt) => (
            <Select.Option key={vt} value={vt}>
              {VoteTipping[vt as any]}{' '}
            </Select.Option>
          ))}
      </Select>
    </>
  )
}
const BaseGovernanceForm = ({
  form,
  ...props
}: {
  formErrors: any
  setForm: any
  setFormErrors: any
  form: BaseGovernanceFormFieldsV3 | BaseGovernanceFormFieldsV2
}) => {
  return form._programVersion === 3 ? (
    <BaseGovernanceFormV3 form={form} {...props} />
  ) : (
    <BaseGovernanceFormV2 form={form} {...props} />
  )
}

export default BaseGovernanceForm
