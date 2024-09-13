import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LicensePinIcon({
  iconName = 'license-pin',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
