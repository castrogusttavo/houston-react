import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FingerPrintMinusIcon({
  iconName = 'finger-print-minus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
