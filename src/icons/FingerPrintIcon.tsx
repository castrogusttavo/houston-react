import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FingerPrintIcon({
  iconName = 'finger-print',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
