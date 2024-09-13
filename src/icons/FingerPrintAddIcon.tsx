import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FingerPrintAddIcon({
  iconName = 'finger-print-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
