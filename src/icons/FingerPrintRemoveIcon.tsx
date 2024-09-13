import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FingerPrintRemoveIcon({
  iconName = 'finger-print-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
