import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FingerPrintScanIcon({
  iconName = 'finger-print-scan',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
