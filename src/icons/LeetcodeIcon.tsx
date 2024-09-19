import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LeetcodeIcon({ iconName = 'leetcode-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
