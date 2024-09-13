import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecuredNetworkIcon({
  iconName = 'secured-network',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
