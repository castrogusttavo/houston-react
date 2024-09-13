import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LicenseDraftIcon({
  iconName = 'license-draft',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
