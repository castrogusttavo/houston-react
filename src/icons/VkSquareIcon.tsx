import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VkSquareIcon({ iconName = 'vk-square', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
