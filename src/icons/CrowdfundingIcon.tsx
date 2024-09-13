import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CrowdfundingIcon({
  iconName = 'crowdfunding',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
