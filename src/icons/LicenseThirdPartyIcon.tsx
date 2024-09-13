import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LicenseThirdPartyIcon({
  iconName = 'license-third-party',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
