import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LicenseNoIcon({
  iconName = 'license-no',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
