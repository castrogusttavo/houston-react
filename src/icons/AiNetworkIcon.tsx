import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiNetworkIcon({
  iconName = 'ai-network',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
